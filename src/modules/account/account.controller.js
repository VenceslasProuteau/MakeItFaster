'use strict';

export default class AccountController {

    constructor(UserService, SpinnerAPI, toaster, Upload) {
    	this.UserService = UserService;
        this.SpinnerAPI = SpinnerAPI;
        this.toaster = toaster;
        this.Upload = Upload;
    	this.initUser();
    }

    initUser() {
        // we work on a copy of the stored user
    	this.user = Object.assign({}, this.UserService.user);
    }

    save() {
        this.SpinnerAPI.show();
    	this.UserService.save(this.user)
            .then(() => {
                this.toaster.pop('success', 'Modifications bien enregistrées');
                this.formAccount.$setPristine();
            })
            .catch((error) => this.toaster.pop('error', 'Problèeme lors de la sauvegarde de vos modifications'))
            .finally(() => this.SpinnerAPI.hide());
    }

    cancel() {
    	this.initUser();
    }

    uploadFiles(file, errFiles) {
        this.f = file;
        this.errFile = errFiles && errFiles[0];
        const self = this;
        if (file) {
            console.log(file);
            this.Upload.base64DataUrl(file)
                .then((url) => {
                    self.user.imageProfile = url;
                    self.UserService.save(self.user);
                });
        }   
    }

}

AccountController.$inject = ['UserService', 'SpinnerAPI', 'toaster', 'Upload'];