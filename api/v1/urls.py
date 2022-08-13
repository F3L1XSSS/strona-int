from django.urls import path, include

app_name = 'api-v1'
urlpatterns = [

    path(r'test/', include('api.v1.testview.urls', namespace='test')),

]
