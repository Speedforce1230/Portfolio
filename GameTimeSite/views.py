from django.http import HttpResponse
from django.shortcuts import render
from . models import GameTime
from image_url import image_url
# GameTime.objects.all() is used to retrieve all objects created by the admin page on the website
# It contains all the important fields like name, time played etc.
games = GameTime.objects.all()

# Index functions are used to render .html files and also images


def index(request):
    return render(request, 'index.html',
                  {'games': games})


def index2(request):
    val = image_url["valorant"]
    return render(request, 'valorant.html', {'val': val})


def index3(request):
    gotg = image_url["guardians"]
    return render(request, 'gotg.html',
                  {'gotg': gotg})


def index4(request):
    r6 = image_url["rainbowsix"]
    return render(request, 'r6.html',
                  {'r6': r6})


def index5(request):
    dv = image_url["division"]
    return render(request, 'division.html', {"dv": dv})


def index6(request):
    out = image_url['outriders']
    return render(request, 'outriders.html', {'out': out})


def index7(request):
    tw3 = image_url['witcher3']
    return render(request, 'witcher3.html', {'tw3': tw3})


def index8(request):
    aat = image_url['aceattorney']
    return render(request, 'aat.html', {'aat': aat})


def index9(request):
    tf2 = image_url['titanfall2']
    return render(request, 'tf2.html', {'tf2': tf2})


def index10(request):
    gaac = image_url['greataceattorney']
    return render(request, 'gaac.html', {'gaac': gaac})


def index11(request):
    sekiro = image_url['sekiro']
    return render(request, 'sekiro.html', {'sekiro': sekiro})


def index12(request):
    er = image_url["eldenring"]
    return render(request, 'eldenring.html', {'er': er})


def index13(request):
    fc6 = image_url['fc6']
    return render(request, 'fc6.html', {'fc6': fc6})


def index14(request):
    return render(request, 'about.html')

