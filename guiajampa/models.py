from django.db import models


class PontoTuristico(models.Model):
    nome = models.CharField('Nome', max_length=200)
    descricao = models.TextField('Descrição', blank=True)
    latitude = models.DecimalField('Latitude', max_digits=9, decimal_places=6)
    longitude = models.DecimalField('Longitude', max_digits=9, decimal_places=6)
    foto = models.ImageField('Foto', upload_to='pontos/', blank=True, null=True)
    categoria = models.CharField('Categoria', max_length=100)

    def __str__(self):
        return self.nome
