export default {
    queryString(data) {
        const body = [];
        for (const [key, value] of Object.entries(data)) {
            body.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        }
        return body.join('&');
    },

    /**
     * 发送POST请求
     *
     * @param {string} url
     * @param {Object} data
     * @param {string} type
     * @return {Promise}
     */
    post(url, data = {}, type = 'form') {
        if (type === 'json') {
            return fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    return response.json();
                }

                return Promise.reject(`请求出错，稍后再试。CODE：${response.status}`);
            });
        }
        return fetch(url, {
            method: 'POST',
            body: this.queryString(data),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(`请求出错，稍后再试。CODE：${response.status}`);
        });
    },

    /**
     * 发送DELETE请求
     *
     * @param {string} url
     * @param {Object} data
     * @return {Promise}
     */
    delete(url, data = {}) {
        return fetch(url, {
            method: 'DELETE',
            body: this.queryString(data),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(`请求出错，稍后再试。CODE：${response.status}`);
        });
    },

    /**
     * 发送PUT请求
     *
     * @param {string} url
     * @param {Object} data
     * @return {Promise}
     */
    put(url, data = {}, type = 'form') {
        if (type === 'json') {
            return fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    return response.json();
                }

                return Promise.reject(`请求出错，稍后再试。CODE：${response.status}`);
            });
        }
        return fetch(url, {
            method: 'PUT',
            body: this.queryString(data),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(`请求出错，稍后再试。CODE：${response.status}`);
        });
    },
    patch(url, data = {}, type = 'form') {
        if (type === 'json') {
            return fetch(url, {
                method: 'PATCH',
                body: JSON.stringify(data),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    return response.json();
                }

                return Promise.reject(`请求出错，稍后再试。CODE：${response.status}`);
            });
        }
        return fetch(url, {
            method: 'PATCH',
            body: this.queryString(data),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(`请求出错，稍后再试。CODE：${response.status}`);
        });
    },

    /**
     * 发送GET请求
     *
     * @param {string} url
     * @param {Object} data
     * @return {Promise}
     */
    get(url, data = {}) {
        const qs = this.queryString(data);
        if (qs !== '') {
            const seq = url.indexOf('?') === -1 ? '?' : '&';
            url = url + seq + qs;
        }
        return fetch(url, { credentials: 'include' }).then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(`请求出错，稍后再试。CODE：${response.status}`);
        });
    },

    postFile(url, data = {}) {
        return fetch(url, {
            method: 'POST',
            body: data,
            credentials: 'include',
            contentType: false
        }).then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(`请求出错，稍后再试。CODE：${response.status}`);
        });
    }

};
