from django.db import models
from django.templatetags.static import static

# Create your models here.


class Cliente(models.Model):
    username = models.CharField(max_length=15)
    email = models.EmailField()
    telefono = models.CharField(max_length=9)
    nombre = models.CharField(max_length=30, null=True, blank=True)
    apellidos = models.CharField(max_length=30, null=True, blank=True)

    def __str__(self):
        return self.username


class Articulo(models.Model):
    nombre = models.CharField(max_length=10)
    precio = models.IntegerField()
    stock = models.IntegerField()
    img = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=30, null=True)
    categoria = models.CharField(max_length=20)
    marca = models.CharField(max_length=30, null=True)

    def __str__(self):
        return self.nombre

    def img_url(self):
        return static("/media/images/{}".format(self.img))


class Pedido(models.Model):
    numero = models.IntegerField()
    fecha = models.DateField()
    completado = models.BooleanField()