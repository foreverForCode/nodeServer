var data ={
    "code": "100",
    "msg": "处理成功",
    "treeNodes": [
        {
            "id": 208,
            "parentId": 0,
            "name": "店铺",
            "resTypeName": "导航",
            "link": "/api/nav/index/208",
            "resourceCode": "208",
            "children": [
                {
                    "id": 216,
                    "parentId": 208,
                    "name": "店铺管理",
                    "resTypeName": "菜单",
                    "link": "shop/manage",
                    "resourceCode": "216",
                    "children": null
                }

            ]
        },
        {
            "id": 411,
            "parentId": 0,
            "name": "产品",
            "resTypeName": "导航",
            "link": "/api/nav/index/411",
            "resourceCode": "411",
            "children": [
                {
                    "id": 412,
                    "parentId": 411,
                    "name": "产品管理",
                    "resTypeName": "菜单",
                    "link": "product/productManage",
                    "resourceCode": "412",
                    "children": null
                }

            ]
        },
        {
            "id": 209,
            "parentId": 0,
            "name": "订单",
            "resTypeName": "导航",
            "link": "/api/nav/index/209",
            "resourceCode": "209",
            "children": [
                {
                    "id": 221,
                    "parentId": 209,
                    "name": "订单列表",
                    "resTypeName": "菜单",
                    "link": "order/list",
                    "resourceCode": "221",
                    "children": null
                },
                {
                    "id": 222,
                    "parentId": 209,
                    "name": "仲裁退款",
                    "resTypeName": "菜单",
                    "link": "order/static",
                    "resourceCode": "222",
                    "children": null
                },
                {
                    "id": 223,
                    "parentId": 209,
                    "name": "订单评价",
                    "resTypeName": "菜单",
                    "link": "order/organ",
                    "resourceCode": "223",
                    "children": null
                },
                {
                    "id": 223,
                    "parentId": 209,
                    "name": "订单结算",
                    "resTypeName": "菜单",
                    "link": "order/organ",
                    "resourceCode": "223",
                    "children": null
                }
            ]
        },
        {
            "id": 210,
            "parentId": 0,
            "name": "财务",
            "resTypeName": "导航",
            "link": "/api/nav/index/210",
            "resourceCode": "210",
            "children": [
                {
                    "id": 218,
                    "parentId": 210,
                    "name": "资金管理",
                    "resTypeName": "菜单",
                    "link": "account/reconciliation",
                    "resourceCode": "218",
                    "children": null
                },
                {
                    "id": 219,
                    "parentId": 210,
                    "name": "提现管理",
                    "resTypeName": "菜单",
                    "link": "account/refund",
                    "resourceCode": "219",
                    "children": null
                },
                {
                    "id": 220,
                    "parentId": 210,
                    "name": "退款管理",
                    "resTypeName": "菜单",
                    "link": "account/withdrawals",
                    "resourceCode": "220",
                    "children": null
                }
            ]
        },
        {
            "id": 311,
            "parentId": 0,
            "name": "部落",
            "resTypeName": "导航",
            "link": "/api/nav/index/211",
            "resourceCode": "311",
            "children": [
                {
                    "id": 312,
                    "parentId": 311,
                    "name": "基本信息",
                    "resTypeName": "菜单",
                    "link": "tribe/tribeIndex",
                    "resourceCode": "312",
                    "children": null
                },
                {
                    "id": 312,
                    "parentId": 311,
                    "name": "店铺申请加入",
                    "resTypeName": "菜单",
                    "link": "tribe/tribeIndex",
                    "resourceCode": "312",
                    "children": null
                }

            ]
        },
        {
            "id": 211,
            "parentId": 0,
            "name": "账号",
            "resTypeName": "导航",
            "link": "/api/nav/index/211",
            "resourceCode": "211",
            "children": [
                {
                    "id": 212,
                    "parentId": 211,
                    "name": "部落用户",
                    "resTypeName": "菜单",
                    "link": "user/platformUser",
                    "resourceCode": "212",
                    "children": null
                },
                {
                    "id": 213,
                    "parentId": 211,
                    "name": "内部授权",
                    "resTypeName": "菜单",
                    "link": "user/insideAuthorize",
                    "resourceCode": "213",
                    "children": null
                },
                {
                    "id": 214,
                    "parentId": 211,
                    "name": "内部角色",
                    "resTypeName": "菜单",
                    "link": "user/insideStarf",
                    "resourceCode": "214",
                    "children": null
                }
            ]
        },
        {
            "id": 211,
            "parentId": 0,
            "name": "数据中心",
            "resTypeName": "导航",
            "link": "/api/nav/index/211",
            "resourceCode": "211",
            "children": [
                {
                    "id": 212,
                    "parentId": 211,
                    "name": "部落用户",
                    "resTypeName": "菜单",
                    "link": "user/platformUser",
                    "resourceCode": "212",
                    "children": null
                },
                {
                    "id": 213,
                    "parentId": 211,
                    "name": "内部授权",
                    "resTypeName": "菜单",
                    "link": "user/insideAuthorize",
                    "resourceCode": "213",
                    "children": null
                },
                {
                    "id": 214,
                    "parentId": 211,
                    "name": "内部角色",
                    "resTypeName": "菜单",
                    "link": "user/insideStarf",
                    "resourceCode": "214",
                    "children": null
                }
            ]
        }



    ],
    "userRef": {
        "userId": "2",
        "nickname": "运管后台超级管理员",
        "profilePhoto": "http://tx.haiqq.com/uploads/allimg/150325/12231a148-1.jpg"
    },
    "shopRef": {
        "shopCode": "2",
        "shopName": "运管后台",
        "shopLogo": null
    }
}
exports.tribePermission =data;