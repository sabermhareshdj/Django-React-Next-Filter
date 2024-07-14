from django.db import models


class Category(models.Model):
  name = models.CharField(max_length=100)

  def __str__(self):
    return self.name
  

class Product(models.Model):
  name = models.CharField(max_length=100)
  image = models.ImageField(upload_to='products')
  price = models.DecimalField(max_digits=10,decimal_places=2)
  category = models.ForeignKey(Category,related_name='product_category', on_delete=models.SET_NULL, null=True)

  def __str__(self):
    return self.name