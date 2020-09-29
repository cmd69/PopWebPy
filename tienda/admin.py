from django.contrib import admin
from tienda.models import *

# Register your models here.

admin.site.register(Cliente)
admin.site.register(Articulo)
admin.site.register(Pedido)


class ClientesAdmin(admin.ModelAdmin):
    list_display = ('username', 'email')
    search_fields = ('username', 'email', 'telefono')


class ArticulosAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'stock')
    search_fields = ('nombre',)


class tiendaAdmin(admin.ModelAdmin):
    list_display = ('numero', 'fecha', 'completado')
    list_filter = ('fecha',)
    date_hierarchy = ('fecha',)

