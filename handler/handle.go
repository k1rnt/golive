package handler

import (
	"fmt"

	"github.com/labstack/echo/v4"
	"golang.org/x/net/websocket"
)

func handleWebSocket(c echo.Context) error {
	websocket.Handler(func(ws *websocket.Conn) {
		defer ws.Close()

		err := websocket.Message.Send(ws, "Server start...")
		if err != nil {
			c.Logger().Error(err)
		}

		for {
			msg := ""
			err = websocket.Message.Receive(ws, &msg)
			if err != nil {
				c.Logger().Error(err)
			}

			err := websocket.Message.Send(ws, fmt.Sprintf("You send 「%s」\n", msg))
			if err != nil {
				c.Logger().Error(err)
			}

		}
	}).ServeHTTP(c.Response(), c.Request())
	return nil
}
