from django.shortcuts import render
from . models import HomeImage, FashionImage, ProductImage
from django.http import JsonResponse
from django.conf import settings
from django.views import View
homepage_images = HomeImage.objects.all()



class DisplayHTML(View):
    def index(self, request):
        HomePageImgTuples = [(homepage_images[i-2], homepage_images[i-1]) for i in range(2, len(homepage_images) + 2, 2)]
        return render(request, 'index.html',
                    {'home_images': HomePageImgTuples,})

    def index2(self, request):
        return render(request, 'about.html')



class SendImagesToJS(View):
    def send_fashion_img(self, request):
        images = FashionImage.objects.all()
        length = len(images)
        data = {"images": [{"name": image.name, "file_extension": image.file_extension} for image in images],
                "MEDIA_URL": settings.MEDIA_URL_2, "length": length,}
        print(data)
        return JsonResponse(data)

    def send_product_img(self, request):
        images = ProductImage.objects.all()
        length = len(images)
        data = {"images": [{"name": image.name, "file_extension": image.file_extension} for image in images],
                "MEDIA_URL": settings.MEDIA_URL_3, "length": length,}
        return JsonResponse(data)
    
    def send_home_img(self, request):
        length = len(homepage_images)
        data = {"images": [{"name": home_img.name, "file_extension": home_img.file_extension} for home_img in homepage_images],
                "MEDIA_URL": settings.MEDIA_URL, "length": length,}
        return JsonResponse(data)


