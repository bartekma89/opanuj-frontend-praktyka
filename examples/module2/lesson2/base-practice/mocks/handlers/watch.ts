import { http, HttpResponse, StrictResponse } from 'msw';

export const watchHandlers = [
  http.post('/w/api.php', async ({ request }) => {
    const formData = await request.formData();

    console.log('inside handler');

    if (formData.get('action') !== 'watch') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return fetch(request) as Promise<StrictResponse<any>>;
    }

    const watchedStore =
      formData.get('unwatch') === '1' ? { unwatched: true } : { watched: true };

    console.log(watchedStore);

    return HttpResponse.json({
      batchcomplete: true,
      watch: [
        {
          title: formData.get('title'),
          ns: 0,
          ...watchedStore,
        },
      ],
    });
  }),
];
