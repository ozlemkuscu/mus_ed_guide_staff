function appInitialize() {
    $("#user_auth_title").html("<span style=\"margin-left:4px;\">" + getCookie(config.default_repo + '.cot_uname') + "</span>");

}
/**
 * @method getSubmissionSections(form_id)
 * @param form_id {string} -  the entity set/collection name
 * @return JSON
 * Returns a cot_form sections array defining the form
 */
function getSubmissionSections(form_id) {
    let section, model;
    switch (form_id) {
        case 'wip':
            section = [
                {
                    id: "program_section",
                    title: config["Program Section"],
                    rows: [
                        {
                            fields: [
                                { id: "ProgramNameSelect", bindTo: "ProgramNameSelect", title: config["ProgramNameSelect"], type: "dropdown", choices: config["ProgramName"].choices, className: "col-xs-12 col-md-6", required: requiredFlag },
                                { id: "ProgramNameText", bindTo: "ProgramNameText", title: config["ProgramNameText"], className: "col-xs-12 col-md-6" }
                            ]
                        },
                        {
                            fields: [
                                { id: "Curriculum", bindTo: "Curriculum", title: config["Curriculum"].title, type: "dropdown", choices: config["Curriculum"].choices, required: requiredFlag },
                                { id: "Grade", bindTo: "Grade", title: config["Grade"].title, type: "dropdown", choices: config["Grade"].choices, required: requiredFlag }
                            ]
                        },
                        {
                            fields: [
                                { id: "PrimaryTopic", bindTo: "PrimaryTopic", title: config["PrimaryTopic"].title, type: "dropdown", choices: config["PrimaryTopic"].choices, required: requiredFlag },
                            ]
                        },
                        {
                            fields: [
                                { id: "SecTopicSelect", bindTo: "SecTopicSelect", title: config["Secondary Topic"], type: "dropdown", choices: config["AdditionalTopic"].choices, required: requiredFlag, className: "col-xs-12 col-md-4" },
                                { id: "TerTopicSelect", bindTo: "TerTopicSelect", title: config["Tertiary Topic"], type: "dropdown", choices: config["AdditionalTopic"].choices, required: requiredFlag, className: "col-xs-12 col-md-4" },
                                { id: "NewTopic", bindTo: "NewTopic", title: config["New Topic"], className: "col-xs-12 col-md-4" }
                            ]
                        },
                        {
                            fields: [
                                {
                                    id: "AdditionalCur", bindTo: "AdditionalCur", title: config["AdditionalCurriculum"].title, type: "checkbox", choices: config["AdditionalCurriculum"].choices, orientation: "horizontal"
                                }
                            ]
                        },
                        {
                            fields: [
                                {
                                    id: "Description", bindTo: "Description", title: config["Description"], prehelptext: config["DescriptionText"],
                                    type: "textarea", orientation: "horizontal", cols: "50", rows: "3", htmlAttr: { maxLength: 500 }, required: requiredFlag
                                }]
                        }, {
                            fields: [
                                {
                                    id: "BulletText1", bindTo: "BulletText1", title: config["Bullet Text 1"], type: "textarea", orientation: "horizontal", cols: "50", rows: "3"
                                }]
                        }, {
                            fields: [
                                {
                                    id: "BulletText2", bindTo: "BulletText2", title: config["Bullet Text 2"], type: "textarea", orientation: "horizontal", cols: "50", rows: "3"
                                }]
                        }, {
                            fields: [
                                {
                                    id: "BulletText3", bindTo: "BulletText3", title: config["Bullet Text 3"], type: "textarea", orientation: "horizontal", cols: "50", rows: "3"
                                }]
                        }, {
                            fields: [
                                {
                                    id: "BulletText4", bindTo: "BulletText4", title: config["Bullet Text 4"], type: "textarea", orientation: "horizontal", cols: "50", rows: "3"
                                }]
                        },
                        {
                            fields: [
                                {
                                    id: "Duration", bindTo: "Duration", title: config["Duration"].title, type: "dropdown", choices: config["Duration"].choices, required: requiredFlag
                                }
                            ]
                        },
                        {
                            fields: [
                                {
                                    id: "MinStudents", bindTo: "MinStudents", title: config["MinStudents"], validationtype: "number", required: requiredFlag, className: "col-xs-12 col-md-3",
                                    validators: {
                                        integer: {
                                            message: "This field must be a valid integer."
                                        }
                                    }
                                },
                                {
                                    id: "MaxStudents", bindTo: "MaxStudents", title: config["MaxStudents"], validationtype: "number", required: requiredFlag, className: "col-xs-12 col-md-3",
                                    validators: {
                                        integer: {
                                            message: "This field must be a valid integer."
                                        }
                                    }
                                },
                                {
                                    id: "PriceStudent", bindTo: "PriceStudent", title: config["PriceStudent"], validationtype: "currency", required: requiredFlag, className: "col-xs-12 col-md-3",
                                    validators: {
                                        numeric: {
                                            message: "This field must be a valid number."
                                        }
                                    }
                                },
                                {
                                    id: "PriceProgram", bindTo: "PriceProgram", title: config["PriceProgram"], validationtype: "currency", required: requiredFlag, className: "col-xs-12 col-md-3",
                                    validators: {
                                        numeric: {
                                            message: "This field must be a valid number."
                                        }
                                    }
                                }
                            ] // closing fields
                        }] // closing rows
                },
                {
                    "id": "site_section",
                    "title": config["Site Section"],
                    "className": "panel-info",
                    "rows": [
                        {
                            "fields": [
                                { id: "SiteName", bindTo: "SiteName", title: config["SiteName"].title, type: "dropdown", choices: config["SiteName"].choices, required: requiredFlag },

                            ]
                        },
                        {
                            "fields": [
                                {
                                    id: "LunchOption", bindTo: "LunchOption", title: config["LunchOption"].title, type: "radio", choices: config["LunchOption"].choices, orientation: "horizontal", required: requiredFlag
                                }
                            ]
                        },
                        {
                            "fields": [
                                {
                                    id: "OtherOptions", bindTo: "OtherOptions", title: config["OtherOptions"].title, type: "checkbox", choices: config["OtherOptions"].choices, orientation: "vertical", required: requiredFlag
                                }
                            ]
                        },
                        {
                            "fields": [
                                {
                                    id: "Availability", bindTo: "Availability", title: config["Availability"].title, type: "checkbox", choices: config["Availability"].choices, orientation: "vertical", required: requiredFlag
                                }
                            ]
                        },
                        {
                            "fields": [
                                {
                                    id: "StartTime", bindTo: "StartTime", title: config["StartTime"].title, type: "radio", choices: config["StartTime"].choices, orientation: "horizontal", required: requiredFlag
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "imageSec",
                    "title": config["Attachments Section"],
                    "className": "panel-info",
                    "rows": [
                        {
                            "fields": [
                                {
                                    "id": "ProgramPhoto", "prehelptext": config["Program Photo Text"], "title": config["Program Photo"], "type": "html",
                                    "aria-label": "Dropzone File Upload Control Field for Images",
                                    "html": "<section aria-label='File Upload Control Field for Images' id='image_attachments'> <div class='dropzone' id='uploadedFiles' aria-label='Dropzone File Upload Control for Images Section'></div></section>", "className": "col-xs-12 col-md-12"
                                },
                                { "id": "submitHelp", "title": "", "type": "html", "html": config["SubmitText"], "className": "col-xs-12 col-md-12" },
                                {
                                    "id": "actionBar",
                                    "type": "html",
                                    "html": `<div className="col-xs-12 col-md-12"><button class="btn btn-success" id="savebtn"><span class="glyphicon glyphicon-send" aria-hidden="true"></span> ` + config.button.submitReport + `</button>
                               <button class="btn btn-success" id="printbtn"><span class="glyphicon glyphicon-print" aria-hidden="true"></span>Print</button></div>`
                                },
                                { "id": "successFailRow", "type": "html", "className": "col-xs-12 col-md-12", "html": `<div id="successFailArea" className="col-xs-12 col-md-12"></div>` },
                                { "id": "fid", "type": "html", "html": "<input type=\"text\" id=\"fid\" aria-label=\"Document ID\" aria-hidden=\"true\" name=\"fid\">", class: "hidden" },
                                { "id": "action", "type": "html", "html": "<input type=\"text\" id=\"action\" aria-label=\"Action\" aria-hidden=\"true\" name=\"action\">", class: "hidden" },
                                { "id": "createdBy", "type": "html", "html": "<input type=\"text\" id=\"createdBy\" aria-label=\"Record Created By\" aria-hidden=\"true\" name=\"createdBy\">", class: "hidden" },
                                { "id": "recCreated", "type": "html", "html": "<input type=\"text\" id=\"recCreated\" aria-label=\"Record Creation Date\" aria-hidden=\"true\" name=\"recCreated\">", class: "hidden" },
                                { "id": "Status", "type": "html", "html": "<input type=\"hidden\" aria-label=\"Record Status\" aria-hidden=\"true\" id=\"lstStatus\" name=\"lstStatus\">", class: "hidden" }
                            ]
                        }
                    ]
                }

            ];
            model = new CotModel({
                "recCreated": "",
                "recStatus": "",
                "District": "",
                "Notes": "",
                "MapAddr": "",
                "SiteURL": "",
                "SitePicName": "",
                "ProgramName": "",
                "ProgramNameSelect": "",
                "ProgramNameText": "",
                "Curriculum": "",
                "Grade": "",
                "PrimaryTopic": "",
                "SecTopic": "",
                "SecTopicSelect": "",
                "TerTopic": "",
                "TerTopicSelect": "",
                "NewTopic": "",
                "AdditionalCur": [],
                "Description": "",
                "BulletText1": "",
                "BulletText2": "",
                "BulletText3": "",
                "BulletText4": "",
                "Duration": "",
                "MinStudents": "",
                "MaxStudents": "",
                "PriceStudent": "",
                "PriceProgram": "",
                "Name": "",
                "Address": "",
                "Phone": "",
                "Email": "",
                "LunchOption": "",
                "OtherOptions": [],
                "Availability": [],
                "StartTime": ""
            });
            break;
        case 'vendor2':
            section = [
                {
                    "id": "vendorSection",
                    "title": "Vendor",
                    "rows": [
                        {
                            "fields": [
                                { "id": "VendorNumber", "title": "Vendor Number", "required": true, "bindTo": "VendorNumber" },
                                { "id": "VendorName", "title": "Vendor Name", "required": true, "bindTo": "VendorName" },
                                {
                                    "id": "EffectiveDate", "bindTo": "EffectiveDate", "title": "Effective Date",
                                    "type": "datetimepicker", "required": true,
                                    "options": { "format": "YYYY-MM-DD" },
                                }
                            ]
                        },
                        {
                            "fields": [
                                { "id": "UserID", "title": "User ID", "required": true, "bindTo": "UserID" },

                                { "id": "EmailAddress", "title": "Recovery EMail", "required": true, "validationtype": "Email", "bindTo": "EmailAddress" },
                                { "id": "NewOrderNotification", "bindTo": "NewOrderNotification", "title": "New Work Order / Operation", "required": true, "orientation": "horizontal", "type": "radio", "choices": [{ "text": "Yes", "value": "Yes" }, { "text": "No", "value": "No" }] }
                            ]
                        },
                        {
                            "fields": [
                                { "id": "AccessKey", "bindTo": "AccessKey", "title": "Access Key", "required": true, "type": "password" },
                                { "id": "ConfirmAccessKey", "bindTo": "ConfirmAccessKey", "title": "Confirm Access Key", "required": true, "type": "password", validators: { identical: { field: 'AccessKey', message: 'Access key and Confirm Access Key are not the same' } } }
                            ]
                        },
                        {
                            "grid": {
                                "className": "col-xs-6",
                                "id": "NEA_GRID",
                                "bindTo": "NEA_GRID",
                                "title": "Email Notification for",
                                "type": "grid",
                                "required": true,
                                "headers": [{ "title": "Email addresses" }
                                ],
                                "fields": [
                                    {
                                        "title": "Email address",
                                        "type": "text",
                                        "id": "NotificationEmailAddress",
                                        "bindTo": "NotificationEmailAddress",
                                        "validationtype": "Email"
                                    }
                                ]
                            }
                        },
                        {
                            "grid": {
                                "className": "col-xs-6",
                                "id": "VN_GRID",
                                "bindTo": "VN_GRID",
                                "title": "Vendor Numbers", "type": "grid", "required": true,
                                "headers": [{ "title": "Vendor Numbers" }],
                                "fields": [
                                    {
                                        "title": "Vendor Number",
                                        "type": "text",
                                        "id": "VendorNumbers",
                                        "bindTo": "VendorNumbers"
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": "saveSubmit",
                    "rows": [
                        {
                            "fields": [
                                {
                                    "id": "saveReport",
                                    "title": config.button.saveReport,
                                    "type": "html",
                                    "html": "<button class=\"btn btn-success btn-save\" id=\"save\"><span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span> " + config.button.saveReport + "</button>",
                                    "class": "pull-left"
                                }
                            ]
                        },
                        {
                            "fields": [
                                {
                                    "id": "fid",
                                    "type": "html",
                                    "html": "<input type=\"hidden\" id=\"fid\" name=\"fid\">",
                                    "class": "hidden"
                                }, {
                                    "id": "action",
                                    "type": "html",
                                    "html": "<input type=\"hidden\" id=\"action\" name=\"action\">",
                                    "class": "hidden"
                                }, {
                                    "id": "createdBy",
                                    "type": "html",
                                    "html": "<input type=\"hidden\" id=\"createdBy\" name=\"createdBy\">",
                                    "class": "hidden"
                                }, {
                                    "id": "modifiedBy",
                                    "type": "html",
                                    "html": "<input type=\"hidden\" id=\"modifiedBy\" name=\"modifiedBy\">",
                                    "class": "hidden"
                                }, {
                                    "id": "modifiedEmail",
                                    "type": "html",
                                    "html": "<input type=\"hidden\" id=\"modifiedEmail\" name=\"modifiedEmail\">",
                                    "class": "hidden"
                                }
                            ]
                        }
                    ]
                }
            ];
            model = new CotModel({
                "VendorNumber": "",
                "VendorName": "",
                "EffectiveDate": "",
                "UserID": "",
                "EmailAddres": "",
                "NewOrderNotification": "",
                "AccessKey": "",
                "ConfirmAccessKey": "",
                "NEA_GRID": new CotCollection([]),
                "VN_GRID": new CotCollection([]),
            });
            break;
        case 'vendor':
            section = []
            model = new CotModel({ "text_field": "" }, { "multiselect": [""] });
            break;
    }
    return [section, model];
}
function getColumnDefinitions(formName, filter) {
    let columnDefs, view;
    switch (formName) {
        case 'wip':
            columnDefs = [
                { "targets": 0, "checkboxes": { "selectRow": true }, "data": "id", "createdCell": function (td, cellData, rowData) { } },
                { data: "ProgramName", title: "ProgramName", "filter": false, "sortOrder": "asc" },
                { data: "Curriculum", title: "Curriculum" }
            ]
            view = "wip";
            break;
        case 'vendor':
            columnDefs = [
                { "targets": 0, "checkboxes": { "selectRow": true }, "data": "id", "createdCell": function (td, cellData, rowData) { } },
                { data: 'VendorName', title: 'Vendor', filter: true, "type": "text", sortOrder: "asc" },
                { data: 'VendorNumber', title: 'Vendor#', filter: true, "type": "text", sortOrder: "desc" },
                { data: 'EffectiveDate', title: 'Effective Date', filter: false, sortOrder: "desc", type: 'date' },
                { data: 'UserID', title: 'User Name', filter: true, "type": "text", sortOrder: "desc" }
            ];
            view = "vendor";
            break;
        default:
            break;
    }
    return [columnDefs, view];
}
function registerEvents() {
    // console.log('registerEvents 1.3');
    $("#maincontent").off('click', '#tabExportCSV').on('click', '#tabExportCSV', function () { $(".dt-button.buttons-csv.buttons-html5").click(); })
    $("#maincontent").off('click', '#tabExportEXCEL').on('click', '#tabExportEXCEL', function () { $(".dt-button.buttons-excel.buttons-html5").click(); });
    $("#maincontent").off('click', '#tabExportPDF').on('click', '#tabExportPDF', function () { $(".dt-button.buttons-pdf.buttons-html5").click(); });
    $("#maincontent").off('click', '#tabExportCopy').on('click', '#tabExportCopy', function () { $(".dt-button.buttons-copy.buttons-html5").click(); });

    // Create New Entry button
    $("#maincontent").off('click', '.btn-createReport').on('click', '.btn-createReport', function () {
        hasher.setHash($(this).attr('data-id') + '/new?ts=' + new Date().getTime());
    });

    $("#maincontent").off("input", "#admin_search").on("input", "#admin_search", function () {
        $("#btn-adminSearch").find('i').removeClass('glyphicon glyphicon-refresh').addClass('glyphicon glyphicon-search');
        myDataTable.dt.search(this.value).draw();
    });
    // Print button
    $("#maincontent").off('click', '#btn-print').on('click', '#btn-print', function (e) {
        e.stopPropagation();
        e.preventDefault();
        window.print();
    });

    // Navigation tab links by report status
    $("#maincontent").off('click', '.tablink').on('click', '.tablink', function () {
        hasher.setHash($(this).attr('data-id') + '?ts=' + new Date().getTime() + '&status=' + $(this).attr('data-status') + '&filter=' + $(this).attr('data-filter'));
    });

    $("#maincontent").off("click", ".btn-delete").on("click", ".btn-delete", function (e) {
        let fid = hasher.getHashAsArray()[1].substring(0, hasher.getHashAsArray()[1].indexOf('?'));
        let formName = hasher.getHashAsArray()[0]
        bootbox.confirm({
            size: "small",
            message: "Are you sure you want to DELETE entity?",
            callback: function (result) {
                if (result === true) {
                    deleteReport(fid, formName);
                }
            }
        })
        e.preventDefault();
    });
}
