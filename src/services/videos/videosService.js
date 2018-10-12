import requesterService from '../requester';
const endPoint = '/videos';
const auth = 'admin';

export default {

    loadAll: () => {

        return requesterService
            .get(endPoint);
    },

    create: (url, description) => {

        console.log('' + url + ' ' + description);

        let data =  {
            url: url,
            description: description
        };

        return requesterService.post(endPoint, auth, data);
    },

    delete: (id) => {

        let url = endPoint + '/' + id;

        return requesterService.remove(url, auth);
    },

    saveNewOrder: (orderedIds) => {

      let data = {
          orderedVideoIds: orderedIds
      };

      console.log(data);

      let url = endPoint + '/reorder';

      return requesterService.post(url, auth, orderedIds)
    }
};
