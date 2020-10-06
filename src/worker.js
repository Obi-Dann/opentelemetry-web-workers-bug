import {
    ConsoleSpanExporter,
    SimpleSpanProcessor
  } from "@opentelemetry/tracing";
  import { WebTracerProvider } from "@opentelemetry/web";
  
  const provider = new WebTracerProvider();
  
  provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
  
  provider.register();
  
  self.postMessage("worker-created");
  