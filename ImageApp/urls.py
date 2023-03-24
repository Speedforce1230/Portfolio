from django.urls import path
from . views import *
from django.conf import settings
from django.conf.urls.static import static
# All Index Functions are from views.py and are used to render the web pages
# path function is used to define a path for the urls of web pages
urlpatterns = [
    path('', index),
    path('about/', index2),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
