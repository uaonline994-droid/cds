local webView = Browser(1366, 768, true, true)

addEventHandler("onClientBrowserCreated", webView,
     function()
    
          -- Load HTML UI
          webView:loadURL("html\regestrations.html\regestrations.html")

     end
)