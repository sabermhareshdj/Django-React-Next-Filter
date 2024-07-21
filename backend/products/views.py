from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend

from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from .filters import ProductFilter
from .pagination import ProductsPagination

class ProductListAPI(generics.ListAPIView):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer
  filter_backends = [DjangoFilterBackend]
  filterset_class = ProductFilter
  pagination_class = ProductsPagination


class CategoryListAPI(generics.ListAPIView):
  queryset = Category.objects.all()
  serializer_class = CategorySerializer
