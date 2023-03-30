from django.shortcuts import render
from . models import HomeImage, FashionImage
from django.http import JsonResponse
from django.conf import settings
homepage_images = HomeImage.objects.all()
def index(request):
    return render(request, 'index.html',
                  {'home_images': homepage_images,})

def index2(request):
    return render(request, 'about.html')
def send_fashion_img(request):
    images = FashionImage.objects.all()
    data = {"images": [{"name": image.name, "file_extension": image.file_extension} for image in images],
            "MEDIA_URL": settings.MEDIA_URL_2}
    return JsonResponse(data)
