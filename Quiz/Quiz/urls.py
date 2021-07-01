from django.contrib import admin
from django.urls import include, path

from . import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', include("visual.urls")),
	path('chat/', include("visual.urls")),
    path('admin/', admin.site.urls),
]

urlpatterns +=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)