from django.shortcuts import render

# Create your views here.

def homepage(request):
  context={}
  context['a'] = 999888911
  return render(request, 'homepage.html', context)
