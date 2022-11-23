"use strict";
class JobPosition {
    constructor(builder) {
        this.PublishedDate = builder.PublishedDate;
        this.Title = builder.Title;
        this.isRemote = builder.isRemote;
        this.Location = builder.Location;
        this.yearsOfExperince = builder.yearsOfExperince;
        this.salaryCap = builder.salaryCap;
        this.Description = builder.Description;
    }
}
JobPosition.Builder = class {
    constructor(PublishedDate, Title, isRemote) {
        //Optional Parameters (with defaults)
        this.Location = 'street hevenyo';
        this.salaryCap = 700;
        this.Description = "hello";
        this.yearsOfExperince = 10;
        this.PublishedDate = PublishedDate;
        this.Title = Title;
        this.isRemote = isRemote;
    }
    setLocation(Location) {
        this.Location = Location;
        return this;
    }
    setDescription(Description) {
        this.Description = Description;
        return this;
    }
    setsalaryCap(salaryCap) {
        this.salaryCap = salaryCap;
        return this;
    }
    setyearsOfExperince(yearsOfExperince) {
        this.yearsOfExperince = yearsOfExperince;
        return this;
    }
    build() {
        return new JobPosition(this);
    }
};
const publuishArticle = new JobPosition.Builder(20122019, 'today is the date ', false)
    .setLocation('Rambam 12, Givatayim')
    .setyearsOfExperince(40)
    .build();
console.log(publuishArticle);
