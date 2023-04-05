from django.urls import path
from . views import DisplayHTML, SendImagesToJS
from django.conf import settings
from django.conf.urls.static import static

display = DisplayHTML()
send_data = SendImagesToJS()
urlpatterns = [
    path('', display.index),
    path('about/', display.index2),
    path('fashion_img/', send_data.send_fashion_img),
    path('product_img/', send_data.send_product_img),
    path('home_img/', send_data.send_home_img),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.MEDIA_URL_2, document_root=settings.MEDIA_ROOT_2)
urlpatterns += static(settings.MEDIA_URL_3, document_root=settings.MEDIA_ROOT_3)

