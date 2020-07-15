export default {
    install(Vue) {
        // takes a {} object and returns a FormData object
        var OTF = function (obj, form, namespace) {
            var fd = form || new FormData()

            let formKey = null

            for (const property in obj) {
                if (obj.hasOwnProperty(property)) {
                    formKey = namespace ? `${namespace}[${property}]` : property
                    /**
                     * if the property is an object, but not a File.
                     * use recursivity.
                     * if it's a file add it
                     * else
                     * add the normal key
                     */
                    if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
                        OTF(obj[property], fd, formKey)
                    } else if (obj[property] instanceof File) {
                        fd.append(formKey, obj[property])
                    } else {
                        // if it's a string
                        let value = obj[property]

                        // if boolean send 1, 0
                        if (value === 'true' || value === 'false' || value === true || value === false) {
                            value = value === 'true' || value === true ? 1 : 0
                        }

                        fd.append(formKey, value)
                    }
                }
            }

            return fd
        }

        Vue.prototype.$objectToFD = function (obj, form, namespace) {
            return OTF(obj, form, namespace)
        };
    }
};