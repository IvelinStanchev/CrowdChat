define(['libs/q', 'libs/jquery-2.1.1'], function (Q) {
    var HttpRequester = (function () {
        var makeHttpRequest = function (url, type, data) {
            var deferred = Q.defer();

            if (data) {
                data = JSON.stringify(data);
            }
            else {
                data = '';
            }

            $.ajax({
                url: url,
                type: type,
                data: data,
                contentType: 'application/json',
                timeout: 25000,
                success: function (data) {
                    deferred.resolve(data);
                },
                error: function (err) {
                    deferred.reject(err);
                }
            });

            return deferred.promise;
        }

        var getJSON = function (url) {
            return makeHttpRequest(url, 'GET', '');
        }

        var postJSON = function (url, data) {
            return makeHttpRequest(url, 'POST', data);
        }

        return {
            getJSON: getJSON,
            postJSON: postJSON
        }
    }());

    return HttpRequester;
});