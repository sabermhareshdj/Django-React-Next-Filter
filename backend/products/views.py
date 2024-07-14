from rest_framework import generics

from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


class ProductListAPI(generics.ListAPIView):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer


class CategoryListAPI(generics.ListAPIView):
  queryset = Category.objects.all()
  serializer_class = CategorySerializer
