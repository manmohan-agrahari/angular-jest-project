import { HttpClient, HttpErrorResponse } from '@angular/common/http'
// Http testing module and mockingController
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { HttpService } from './http.service'
import { PostModel } from './post.model'

describe('HttpService', () => {
  let httpClient: HttpClient;
  let httpTestCtrl: HttpTestingController; //allows for  mocking and flushing request
  let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService],
    })
  })

  beforeEach(() => {
    httpService = TestBed.inject(HttpService)
    httpTestCtrl = TestBed.inject(HttpTestingController)
  })
  afterEach(() => {
    httpTestCtrl.verify()
  })
  it('should test HttpClient.get', () => {
    const testPost: PostModel[] = [
      { userId: 1, id: 7, title: 'title1', body: 'body1' },
      { userId: 2, id: 8, title: 'title2', body: 'body2' },
      { userId: 3, id: 9, title: 'title3', body: 'body3' },
      { userId: 4, id: 10, title: 'title4', body: 'body4' },
    ]

    const testPost1: PostModel[] = []

    //this subscribe will not trigger now
    httpService.getPostList().subscribe((posts) => {
      console.log(posts)
      console.log(testPost1)
      expect(testPost).toBe(posts) //should check mock data
    })
    //Expect that a single request has been made which matches the given URL, and return its mock.
    //req is not going to be trigger now its going to trigger later
    // this expectOne going to retun a request object which is type of TestRequest
    const req = httpTestCtrl.expectOne(httpService.BASE_URL + 'posts')

    //it will be false because it is not returning anything above one expectOne()
    expect(req.cancelled).toBeFalsy()
    expect(req.request.responseType).toBe('json')

    //flush method will resolve by returning a body plus extra http request
    req.flush(testPost)
    //once this flush method is executed  the subscribe of getPostList() will be executed aswell
  })




  it('should test HttpClient.post', (done) => {
    const newPost: PostModel =
    { userId: 11, id: 17, title: 'title123', body: 'body12' }

    //this subscribe will not trigger now
    httpService.addPost(newPost).subscribe((addedPost) => {
      console.log(addedPost)
      expect(addedPost).toEqual( { userId: 11, id: 17, title: 'title123', body: 'body12' }) //should check mock data
      done()
    })
    //Expect that a single request has been made which matches the given URL, and return its mock.
    //req is not going to be trigger now its going to trigger later
    // this expectOne going to retun a request object which is type of TestRequest
    const req = httpTestCtrl.expectOne(httpService.BASE_URL + 'posts')

    //it will be false because it is not returning anything above one expectOne()
    expect(req.cancelled).toBeFalsy()
    expect(req.request.responseType).toBe('json')

    //flush method will resolve by returning a body plus extra http request
    req.flush(newPost)
    //once this flush method is executed  the subscribe of getPostList() will be executed aswell





  })
  it('should test 404 error',(done)=>{
    const errorMsg ='mock 404 error occured'
    httpService.getPostList().subscribe((data)=> {fail('failing with error 404')},
    (error:HttpErrorResponse)=>{
      //console.log(error.status)
      expect(error.status).toBe(404);
      expect(error.error).toEqual(errorMsg)
      done();
    }
    )

    const req= httpTestCtrl.expectOne(httpService.BASE_URL+'posts')
    expect(req.cancelled).toBeFalsy()
    expect(req.request.responseType).toBe('json');
    req.flush(errorMsg, {status:404, statusText:'Not Found'})

 })
})
