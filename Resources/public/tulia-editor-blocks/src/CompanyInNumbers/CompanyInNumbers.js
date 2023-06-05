const Editor = require('./Editor.vue').default;
const Render = require('./Render.vue').default;
const Manager = require('./Manager.vue').default;

export default {
    theme: 'Tulia/Lawyer',
    framework: 'bootstrap-5',
    code: 'CompanyInNumbers',
    name: 'Company In Numbers',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAABkCAMAAACYXt08AAABCFBMVEX////19/bv5dfz8/D//Pb++e/5+vr6+fXy6t37/////vvw7OPXybD78+fRuZfx7un79ev27+Xn5N3r4dP7/Pzq6OPr383OxLPz/P/t59315Mvm18DWzLvNvKT57t3gyqvYw6bp8fbf3Nbm3s3Y0Mbezrnq9/3Kxr7i6u+s0ePf4+Lm4NWIrsK4u7zl0LPszaThyKFujqFaQTLa8/vM4+z57NVyYVdDTlbP6vXt7uzV1NC+y9Df1MTu3cGmrKuPnqjZvpiCkJfEqo1TYmff2M+Wr7ekoZyNdmZnWE7U3N+dvc2puL5pf42pkYKGaVHA4e6zsa2QkpJmcniffWIqNTsxHh1McomY4fARzjndAAAEN0lEQVR42uzPXW+aYBjG8QsVW8lsm3bdqFs7NUVlgSW8BNhYIGgFVMD37vt/k6U7loOnydKDXr+D++xK7j+IiIiIiIiIiIiIiIiIiIiIiIiIiN6jZij1ku1KeTQnwMsRdWeG+Le+XmCoQsxtiP52G7bG5gjK2BxA1JPp4uxl/TTBd4hp+O59Wlp962430KzLnQMx3dkg0y+KxkyNoqslBGk+yigzyqVWYGr8LjoQ05tJeVAamtWNk5sQgjy3jTLw1vCWlY7MwEkfUeOHjwsrMxR7PTZTFRCbt2aQsP15cBTbOTqtPMBJbdSYPqMycvfKdzarOcTT0S1kO0Bl2GvsLZwkoYbshZXV342Pa3x2a1+U6tPxLX44jGD/OY4UT8dJTdR48H/ZxtSaHhykk/Yr0ve6kunw9L2OaimYjsvhXm9dD/3RzTKevyY9D2TbafkjO5BzRzAdt4s8OBs+Fp2v4WoFMQ3bkH0Vn5JNrJ4nm0QVTFeyKOlou0iXo454unZY9J6BD3E6x5ckjSGY3p1t5ri3Uvd8Lkcr/BfSm86bEMF0pv9tv15WFAeiAAyfuiWVVOV+M/do7LYxoNm4UBSk6c28/wtNOczADB2h6e2cb6GQ5KTOvwymYzqm/81l8GC59vd25495+7vpnIDhpjz9XrptP3aHL+B13dTsz1gKhnt3HjcKrv5cfrq7W9efVuGamvn76ivp4jpvr/DPMWIHRtiE7PcR9tN071p/agw/lJkp4Atcfrrw8Zafc5Zk/d6bMjn5DkR51nQfYRLn9MoHNgbLuws/sK/hJKZNNMZ0ZHlMqWxl3GXHFXhmenSSLBozGjuL6W563Iu6rkltJ8HAuvxM8wKA3thL9dblqqYT1WFCltOrloVTF5tzZH5ORnsKaFw1eVaRAqDLy3HkSSBHRktYdrrA/Hra15l/Pqzv8VY7dwc0OI2n5+l6WM8r7bXkyfcHfd+3/KVfOf1KtLfRP/cbUYjt6WLSe8uJhlf/PEzNvHGWxo3jHnznuD5ELdHwTl8034FoAV6qH37y0TtF15wK68nny+09aLqd7wgNna7jlgxxt6k2t3UB3AdXtWEb+flmyJ6lb+HgnC7zXrWHt5nY2jLpg0UKT/dr+/B6XOlQ7WBR9Xa6+FIf3kj/6rU8LH11iAvR3H6lE6+Z16ro16Hq17DMpA/mx2dyq1M/9bR4rO3aj3SzC5j0iH7AopzcMl3t7sQbrKixvaCRvdxU29mku3er2vqh0kNqKw3LKOWUAI0CyYRyqWWX0gJB7SSKU0okoyRiksAirhSESprnOLXCkkvmKUEdGShKwFySj7ea/0g5sMhNMp5YvHwc4QWCWkKVKYSlV6qMU9tsYUlWWrDIlgFEQcnNVOxEiksSBV7mUhYkvwpKxiQRNFUBIIQQQgghhBBCCCGEEEIIIYQQQgghhBBC/6WfYtp1G/MVvwkAAAAASUVORK5CYII=',
    manager: Manager,
    editor: Editor,
    render: Render,
    store: {
        data: {
            state: () => {
                return {
                    numbers: [
                        {
                            id: '1',
                            number: 1700,
                            label: 'Trusted clients',
                        },
                        {
                            id: '2',
                            number: 99,
                            label: 'Successful cases',
                        },
                        {
                            id: '3',
                            number: 1700,
                            label: 'Trusted clients',
                        },
                        {
                            id: '4',
                            number: 99,
                            label: 'Successful cases',
                        },
                    ],
                };
            },
        },
        config: {
            state: () => {
                return {
                    pullUp: '0',
                    type: '',
                };
            },
        },
    },
};
