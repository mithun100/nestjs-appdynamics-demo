require("appdynamics").profile({
    controllerHostName: 'xxxx.saas.appdynamics.com',
    controllerPort: 443,
    accountName: 'xxxx',
    accountAccessKey: 'xxxx',
    controllerSslEnabled: true,
    applicationName: 'NestJSAppMithun',
    tierName: 'tier1',
    nodeName: 'node1',
    logging: {
        'logfiles': [{
                'root_directory': '/tmp/appd',
                'filename': 'echo_%N.log',
                'level': 'TRACE',
                'max_size': 5242880,
                'max_files': 10
            },
            {
                'root_directory': '/tmp/appd',
                'filename': 'protobuf_%N.log',
                'level': 'TRACE',
                'max_size': 5242880,
                'max_files': 10,
                'channel': 'protobuf'
            }
        ]
    }
})
