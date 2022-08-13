from django.urls import path

from api.v1.testview.views import TestViewSet

app_name = "api-v1-test"

urlpatterns = [
    path(r'test/', TestViewSet.as_view(), name='test'),
]
