// hello.cc
#include <node.h>//esta es la libreria para trabajar con node

namespace demo {//crea un primer namespace que se llama demo en este caso no lo vamos a usar pero cuando trabajes con modulos mucho mas grande se usa

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;
//este es el primer metodo
void Method(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  args.GetReturnValue().Set(String::NewFromUtf8(
      isolate, "mundo").ToLocalChecked());
}

void Initialize(Local<Object> exports) {
  NODE_SET_METHOD(exports, "hola", Method);//este es un metodo para exportar a node exporta el metodo Method que retorna mundo y exporta holla por lo que se mostrara hola mundo
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)//esto inicializa el modulo

}  // namespace demo 