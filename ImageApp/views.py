from django.http import HttpResponse
from django.shortcuts import render
from . models import Images
# GameTime.objects.all() is used to retrieve all objects created by the admin page on the website
# It contains all the important fields like name, time played etc.
homepage_images = Images.objects.all()
# Index functions are used to render .html files and also images


def index(request):
    return render(request, 'index.html',
                  {'images': homepage_images,})

def index2(request):
    return render(request, 'about.html')

