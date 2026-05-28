from django.core.management.base import BaseCommand
from guiajampa.models import PontoTuristico

class Command(BaseCommand):
    help = 'Popula o banco com os locais movimentos de João Pessoa'

    def handle(self, *args, **kwargs):

        locais = [
            {
                'nome': 'Shopping Manaíra',
                'descricao': 'Maior shopping da cidade, com cinema IMAX, área de eventos, restaurantes e diversas lojas.',
                'latitude': -7.1150,
                'longitude': -34.8450,
                'categoria': 'Shopping',
            },
            {
                'nome': 'Shopping Tambiá',
                'descricao': 'Shopping tradicional no centro da cidade, referência para os moradores locais.',
                'latitude': -7.1200,
                'longitude': -34.8500,
                'categoria': 'Shopping',
            },
            {
                'nome': 'Mangabeira Shopping',
                'descricao': 'Atende a região sul de João Pessoa com ampla oferta de serviços e lojas.',
                'latitude': -7.1250,
                'longitude': -34.8550,
                'categoria': 'Shopping',
            },
            {
                'nome': 'Mercado Central',
                'descricao': 'Local de compras típicas, artesanato paraibano e souvenirs da Paraíba.',
                'latitude': -7.1300,
                'longitude': -34.8600,
                'categoria': 'Mercado',
            },
            {
                'nome': 'Orla de Tambaú',
                'descricao': 'Calçadão à beira-mar com feiras, quiosques e vida noturna agitada.',
                'latitude': -7.1350,
                'longitude': -34.8650,
                'categoria': 'Orla',
            },
            {
                'nome': 'Praia do Bessa',
                'descricao': 'Área nobre com estrutura para famílias, esportes aquáticos e restaurantes.',
                'latitude': -7.1400,
                'longitude': -34.8700,
                'categoria': 'Praia',
            }
    ]
        for local in locais:
            obj, created = PontoTuristico.objects.get_or_create(
                nome=local['nome'],
                defaults=local
            )
            status = 'Criado' if created else 'já existe'
            self.stdout.write(f'{local['nome']}: {status}')

            self.stdout.write(self.style.SUCCESS('Seed concluído!'))