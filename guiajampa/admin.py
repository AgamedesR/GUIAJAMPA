from django.contrib import admin
from .models import PontoTuristico


@admin.register(PontoTuristico)
class PontoTuristicoAdmin(admin.ModelAdmin):
    list_display = ('nome', 'categoria', 'latitude', 'longitude')
    search_fields = ('nome', 'categoria')
