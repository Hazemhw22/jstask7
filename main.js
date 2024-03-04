// closures
(function() {
  function createCounter() {
      let count = 0;
      return {
          increment: function() {
              count++;
              return count;
          },
          getCount: function() {
              return count;
          },
          reset: function() {
              count = 0;
              return count;
          }
      };
  }

  let subhanAllahCounter = createCounter();
  let alhamdulillahCounter = createCounter();
  let laIlahaIllallahCounter = createCounter();
  let allahuAkbarCounter = createCounter();

  //  update
  function countAndUpdate(counter, counterElementId) {
      let count = counter.increment();
      document.getElementById(counterElementId).innerText = count;
  }

  // add ++
  document.getElementById('subhanAllahBtn').addEventListener('click', function() {
      countAndUpdate(subhanAllahCounter, 'subhanAllahCount');
  });

  document.getElementById('alhamdulillahBtn').addEventListener('click', function() {
      countAndUpdate(alhamdulillahCounter, 'alhamdulillahCount');
  });

  document.getElementById('laIlahaIllallahBtn').addEventListener('click', function() {
      countAndUpdate(laIlahaIllallahCounter, 'laIlahaIllallahCount');
  });

  document.getElementById('allahuAkbarBtn').addEventListener('click', function() {
      countAndUpdate(allahuAkbarCounter, 'allahuAkbarCount');
  });

  // reset
  function resetCounters() {
      subhanAllahCounter.reset();
      alhamdulillahCounter.reset();
      laIlahaIllallahCounter.reset();
      allahuAkbarCounter.reset();

      document.getElementById('subhanAllahCount').innerText = 0;
      document.getElementById('alhamdulillahCount').innerText = 0;
      document.getElementById('laIlahaIllallahCount').innerText = 0;
      document.getElementById('allahuAkbarCount').innerText = 0;
  }

  document.getElementById('resetBtn').addEventListener('click', function() {
      resetCounters();
  });
})();
