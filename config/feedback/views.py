from django.core.mail import send_mail
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def senf_feedback(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            # отправка письма
            send_mail(
                subject=f'Новое сообщение от {data['name']}',
                message=f'Имя {data['name']} Email{data['email']} сообщение {data['comment']}',
                from_email = 'наша почта @mail.ru',
                recipient_list=['наша почта @mail.ru'],
                fail_silently=False

            )

            return JsonResponse ({'status':'ok','message':'письмо отправлено'})
        except Exception as e:
            return JsonResponse({'status':'error','message':str(e)})
    return JsonResponse({'status':'error','message':'метод не разрешен'})