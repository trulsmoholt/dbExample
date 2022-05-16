from rest_framework import serializers,viewsets,routers

from .models import  Fagkveld

class FagkveldSerializer(serializers.ModelSerializer):
    pub_date = serializers.DateTimeField(read_only=True)
    class Meta:
        model = Fagkveld
        fields = '__all__'



class FagkveldViewSet(viewsets.ModelViewSet):
    queryset = Fagkveld.objects.all()
    serializer_class = FagkveldSerializer

class FagkveldViewSet(viewsets.ModelViewSet):
    queryset = Fagkveld.objects.all()
    serializer_class = FagkveldSerializer




