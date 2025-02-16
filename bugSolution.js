```javascript
// bugSolution.js
import { useState, useEffect } from 'react';

function MyComponent() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate a delay before showing content
    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      {showContent && <p>Some text here</p>}
    </div>
  );
}
export default MyComponent;
```