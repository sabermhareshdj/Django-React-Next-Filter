from django_filters import rest_framework as filters
from .models import Product

class ProductFilter(filters.FilterSet):
  category = filters.CharFilter(method='filter_category')
  price_min = filters.NumberFilter(field_name='price', lookup_expr='gte')
  price_max = filters.NumberFilter(field_name='price', lookup_expr='lte')


  def filter_category(self,queryset,name,value):
    categories = value.split(',') # 1,2,3,4 => [1,2,3,4]
    return queryset.filter(category__id__in=categories)
  

  class Meta:
    model = Product
    fields = ['category','price_min','price_max']
