from django.urls import path
from . views import *
# All Index Functions are from views.py and are used to render the web pages
# path function is used to define a path for the urls of web pages
urlpatterns = [
    path('', index),
    path('about/', index2),
]

