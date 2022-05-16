from django.urls import path,include
from rest_framework import routers

from .serializers import FagkveldViewSet
from . import views

router = routers.DefaultRouter()
router.register(r'fagkveld', FagkveldViewSet)



urlpatterns = [
    path('sample/',views.sample,name='sample'),
    path('',include(router.urls)),
    path('',views.index, name='index')
]