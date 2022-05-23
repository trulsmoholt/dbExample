import React, { useState, useEffect } from 'react';

import FagkveldInput from './components/FagkveldInput';
import Fagkvelder from './components/Fagkvelder';
import ErrorAlert from './components/UI/ErrorAlert';

const backendURL = process.env.NODE_ENV === 'development' ? 'http://localhost:'+process.env.REACT_APP_BACKEND_PORT: 'http://ecs-lb2-1579363355.eu-north-1.elb.amazonaws.com'


function App() {
  const [loadedFagkvelder, setloadedFagkvelder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(loadedFagkvelder)
  useEffect(function () {
    async function fetchData() {
      setIsLoading(true);

      try {
        const response = await fetch(backendURL+'/fagkveld');

        const resData = await response.json();

        if (!response.ok) {
          throw new Error(resData.message || 'Fetching the fagkveld failed.');
        }

        setloadedFagkvelder(resData);
      } catch (err) {
        setError(
          err.message ||
            'Fetching goals failed - the server responsed with an error.'
        );
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  async function addFagkveldHandler(fagkveld) {
    setIsLoading(true);

    try {
      const response = await fetch(backendURL+'/fagkveld/', {
        method: 'POST',
        body: JSON.stringify({
          tittel: fagkveld.tittel,
          tema: fagkveld.tema
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || 'Adding the goal failed.');
      }

      setloadedFagkvelder((prev) => {
        const updated = [
          {
            id: resData.id,
            tittel: resData.tittel,
            tema: resData.tema
          },
          ...prev,
        ];
        return updated;
      });
    } catch (err) {
      setError(
        err.message ||
          'Adding a goal failed - the server responsed with an error.'
      );
    }
    setIsLoading(false);
  }

  async function deleteHandler(id) {
    console.log("delete",id)
    setIsLoading(true);

    try {
      const response = await fetch(backendURL+'/fagkveld/' + id+'/', {
        method: 'DELETE',
      });

      // const resData = await response.json();

      // if (!response.ok) {
      //   throw new Error(resData.message || 'Deleting the fagkveld failed.');
      // }

      setloadedFagkvelder((prev) => {
        const updated = prev.filter((fagkveld) => fagkveld.id !== id);
        return updated;
      });
    } catch (err) {
      setError(
        err.message ||
          'Deleting the goal failed - the server responsed with an error.'
      );
    }
    setIsLoading(false);
  }

  return (
    <div>
      {error && <ErrorAlert errorText={error} />}
      <FagkveldInput onAddFagkveld={addFagkveldHandler} />
      {!isLoading && (
        <Fagkvelder fagkvelder={loadedFagkvelder} onDelete={deleteHandler} />
      )}
    </div>
  );
}

export default App;
