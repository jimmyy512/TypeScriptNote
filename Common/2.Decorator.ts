function classDecorator(target: any) {
  console.log('---classDecorator:');
  console.log(new target('cool'));
}

function methodDecorator(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log('---methodDecorator:');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function propertyDecorator(target: any, propertyKey: string) {
  console.log('---propertyDecorator:');
  console.log(target, propertyKey);
}

@classDecorator
class Blog {
  @propertyDecorator author: string;

  blogs: any[] = [];

  constructor(author: string) {
    this.author = author;
  }

  @methodDecorator
  getNum() {
    return this.blogs.length;
  }
}
