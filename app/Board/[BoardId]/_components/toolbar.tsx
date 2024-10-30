"use client";

const Toolbar = () => {
  return (
    <>  
    <div
      className="absolute top-[50%] 
        translate-y-[-50%] 
        left-2 
        flex flex-col gap-y-2  "
    >
      <div
        className="p-4
     bg-white 
     shadow-md 
     rounded-md"
      >
        Pen
      </div>
      <div
        className="p-4
     bg-white 
     shadow-md 
     rounded-md"
      >
        Shapes
      </div>
      <div
        className="p-4
     bg-white 
     shadow-md 
     rounded-md"
      >
        Eraser
      </div>
      <div
    className="
    mt-6
    left-2 
    flex flex-col gap-y-1  ">
              <div
        className="p-4
     bg-white 
     shadow-md 
     rounded-md"
      >
        Undo
      </div>
      <div
        className="p-4
     bg-white 
     shadow-md 
     rounded-md"
      >
        Redo
      </div>

    </div>

    </div>

    </>
    
  );
};

export default Toolbar;
