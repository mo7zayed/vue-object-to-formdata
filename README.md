# Object to form data
A vue helper which converts object to FormData instance.

### Getting Started

In your script entry point:

```javascript
import Vue from 'vue';
import ObjectToFD from 'vue-object-to-formdata';

Vue.use(ObjectToFD);

```

In Vue files:

```vue
<script>
    export default {
        data() {
            return {
                form: {
                    name: 'xxx',
                    email: 'email@domain.xyz',
                    file: new File,
                    files: [
                        new File,
                        new File,
                        new File
                    ],
                    tags: [
                        'tag 1',
                        'tag 2',
                        'tag 3',
                        'tag 4'
                    ],
                    location: {
                        address: 'xxx',
                        coords: [000, 000], // long, lat here
                    },
                    projects: [
                        {
                            name: 'xxx',
                            image: new File,
                            images: [
                                new File,
                                new File,
                                new File
                            ]
                        },
                        {
                            name: 'xxx',
                            image: new File,
                            images: [
                                new File,
                                new File,
                                new File
                            ]
                        },
                        {
                            name: 'xxx',
                            image: new File,
                            images: [
                                new File,
                                new File,
                                new File
                            ]
                        }
                    ]
                }
            }
        }
        methods: {
            async send() {
                const response = await axios.post('/example', this.$objectToFD(this.form)).catch(() => {});

                // do something
            }
        }
    }
</script>
```

