class Request{
    client;
    pathLength;
    comfort;
    hasBabyChair;
    capacity;
    comment;
    constructor(client, pathLength, comfort, hasBabyChair, capacity, comment){
        this.client = client;
        this.pathLength = pathLength;
        this.comfort = comfort;
        this.hasBabyChair = hasBabyChair;
        this.capacity = capacity;
        this.comment = comment;        
    }
}
export{Request}