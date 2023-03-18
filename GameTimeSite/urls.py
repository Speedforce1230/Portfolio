from django.urls import path
from . views import *
# All Index Functions are from views.py and are used to render the web pages
# path function is used to define a path for the urls of web pages
urlpatterns = [
    path('', index),
    # path("Valorant/", index2),
    # path('GOTG/', index3),
    # path('R6S/', index4),
    # path('DIV/', index5),
    # path('Outriders/', index6),
    # path('TW3/', index7),
    # path('AAT/', index8),
    # path('TF2/', index9),
    # path('GAAC/', index10),
    # path('Sekiro/', index11),
    # path('ER/', index12),
    # path('FC6/', index13),
    path('about/', index14),
]

