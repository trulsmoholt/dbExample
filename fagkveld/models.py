from datetime import datetime
from time import timezone
from django.db import models
from django.utils import timezone
import datetime

# Create your models here.
class Fagkveld(models.Model):
    tittel = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    tema = models.CharField(max_length=200)
    def __str__(self) -> str:
        return self.Fagkveld_text
    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)
    def save(self, *args,**kwargs):
        if not self.pub_date:
            self.pub_date = timezone.now()
        return super(Fagkveld,self).save(*args,**kwargs)
    
