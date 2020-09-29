from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render
from tienda.models import Articulo


def base(request):
    return render(request, 'base.html')


def bg(request):
    return render(request, 'burger-menu.html')


def album(request):
    return render(request, 'album.html')


def prices(request):
    return render(request, 'prices.html')


def shop(request):
    result = Articulo.objects.all()
    return render(request, 'shop.html', {"data": result})


def game(request):
    return render(request, 'game.html')


def registerPage(request):
    form = UserCreationForm()

    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()

    context = {'form': form}
    return render(request, 'register.html', context)
