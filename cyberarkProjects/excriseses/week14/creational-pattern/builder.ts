class JobPosition{   
        private PublishedDate: number;
        private Title: string;
        private Description: string;
        private Location: string;
        private salaryCap: number;
        private isRemote: Boolean;
        private yearsOfExperince: number;       
      
        public static Builder = class {
          //Required Parameters
          private PublishedDate: number;
          private Title: string;
          private isRemote: Boolean;
      
          //Optional Parameters (with defaults)
          private Location: string = 'street hevenyo';          
          private salaryCap: number = 700;
          private Description: string = "hello";
          private yearsOfExperince: number = 10;
      
          constructor(PublishedDate: number, Title: string, isRemote: Boolean) {
            this.PublishedDate = PublishedDate;
            this.Title = Title;
            this.isRemote = isRemote;
          }
      
          setLocation(Location: string) {
            this.Location = Location;
            return this;
          }
      
          setDescription(Description: string) {
            this.Description = Description;
            return this;
          }
      
          setsalaryCap(salaryCap: number) {
            this.salaryCap = salaryCap;
            return this;
          }
      
          setyearsOfExperince(yearsOfExperince: number) {
            this.yearsOfExperince = yearsOfExperince;
            return this;
          }      
          
      
          build(): JobPosition {
            return new JobPosition(this);
          }
        };
      
        private constructor(builder:any) {
          this.PublishedDate = builder.PublishedDate;
          this.Title = builder.Title;
          this.isRemote = builder.isRemote;
          this.Location = builder.Location;
          this.yearsOfExperince = builder.yearsOfExperince;
          this.salaryCap = builder.salaryCap;
          this.Description = builder.Description;          
        }
      
}


const publuishArticle = new JobPosition.Builder(20122019, 'today is the date ', false)
  .setLocation('Rambam 12, Givatayim')
  .setyearsOfExperince(40)
  .build();

  
 console.log(publuishArticle) 