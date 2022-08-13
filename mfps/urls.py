from drf_yasg import openapi
from drf_yasg.views import get_schema_view

from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title="SoftHR API",
        default_version='v1',
        description="API for SoftHR application",

    ),
    public=True,

    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls', namespace='api')),
    path(r'api/redoc', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
