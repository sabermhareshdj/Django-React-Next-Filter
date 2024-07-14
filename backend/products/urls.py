from django.urls import path
from .views import ProductListAPI,CategoryListAPI


urlpatterns = [
    path('products/' , ProductListAPI.as_view()),
    path('category/' , CategoryListAPI.as_view()),
]