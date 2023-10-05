import { ProductProps } from "@/types";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

const formattedDate = () => {
  const date = new Date();
  // Get the day, month, and year components
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" }); // 'long' gives you the full month name
  const year = date.getFullYear();
  // Get the time components
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Create the formatted string
  const formattedDate = `${day} ${month} ${year} ${hours}:${minutes}`;

  return formattedDate;
};

async function sendEmail(req: any, res: any) {
  const items = req.body.items;
  const totalPrice = req.body.totalPrice;
  const totalQuantity = req.body.totalQuantity;
  const emailTemplate = `
  <td class="esd-stripe" align="center">
    <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
        <tbody>
            <tr>
                <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td width="560" class="esd-container-frame" align="center" valign="top">
                                    <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="center" class="esd-block-text">
                                                    <h2 style="line-height: 150%;">ORDER # 45326789</h2>
                                                    <p style="line-height: 150%;">${formattedDate()}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" class="esd-block-text es-m-txt-c es-p20t">
                                                    <p style="color: #a0937d;">ITEMS ORDERED</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                    <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td class="esd-structure es-p20t es-p20r es-p20l esdev-adapt-off" align="left" esd-custom-block-id="731032" esdev-config="h7">
                    <table width="560" cellpadding="0" cellspacing="0" class="esdev-mso-table">
                        <tbody>
                            ${items
                              .map((item: ProductProps) => {
                                return `<tr>
                              <td class="esdev-mso-td" valign="top">
                                  <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                      <tbody>
                                          <tr>
                                              <td width="125" class="esd-container-frame" align="left">
                                                  <table cellpadding="0" cellspacing="0" width="100%">
                                                      <tbody>
                                                          <tr>
                                                              <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img class="adapt-img p_image" src="${
                                                                item.imageUrl
                                                              }" alt="Marshall Monitor" style="display: block;" width="125" title="Marshall Monitor"></a></td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                              <td width="20"></td>
                              <td class="esdev-mso-td" valign="top">
                                  <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                      <tbody>
                                          <tr>
                                              <td width="125" align="left" class="esd-container-frame">
                                                  <table cellpadding="0" cellspacing="0" width="100%">
                                                      <tbody>
                                                          <tr>
                                                              <td align="left" class="esd-block-text es-p20t es-p20b es-m-p0t es-m-p0b es-m-txt-l">
                                                                  <h3><strong class="p_name">${
                                                                    item.title
                                                                  }</strong></h3>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                              <td width="20"></td>
                              <td class="esdev-mso-td" valign="top">
                                  <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                      <tbody>
                                          <tr>
                                              <td width="176" align="left" class="esd-container-frame">
                                                  <table cellpadding="0" cellspacing="0" width="100%">
                                                      <tbody>
                                                          <tr>
                                                              <td align="right" class="esd-block-text es-p20t es-p20b es-m-p0t es-m-p0b">
                                                                  <p style="color: #666666;" class="p_description">x${
                                                                    item.quantity
                                                                  }</p>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                              <td width="20"></td>
                              <td class="esdev-mso-td" valign="top">
                                  <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                      <tbody>
                                          <tr>
                                              <td width="74" align="left" class="esd-container-frame">
                                                  <table cellpadding="0" cellspacing="0" width="100%">
                                                      <tbody>
                                                          <tr>
                                                              <td align="right" class="esd-block-text es-p20t es-p20b es-m-p0t es-m-p0b">
                                                                  <p class="p_price">$${
                                                                    item.price *
                                                                    item.quantity
                                                                  }</p>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                          </tr>`;
                              })
                              .join("")}
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td class="esd-structure es-p20r es-p20l" align="left">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td width="560" class="esd-container-frame" align="center" valign="top">
                                    <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                    <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td class="esd-structure es-p20r es-p20l esdev-adapt-off" align="left">
                    <table width="560" cellpadding="0" cellspacing="0" class="esdev-mso-table">
                        <tbody>
                            <tr>
                                <td class="esdev-mso-td" valign="top">
                                    <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                        <tbody>
                                            <tr>
                                                <td width="466" class="esd-container-frame" align="left">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td align="right" class="esd-block-text">
                                                                    <p>Subtotal<br>Sales tax<br><b>Total (${totalQuantity}&nbsp;item)</b></p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td width="20"></td>
                                <td class="esdev-mso-td" valign="top">
                                    <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                        <tbody>
                                            <tr>
                                                <td width="74" align="left" class="esd-container-frame">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td align="right" class="esd-block-text">
                                                                    <p>$${totalPrice}<br>$00.00<br><strong>$${totalPrice}</strong></p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td width="560" class="esd-container-frame" align="center" valign="top">
                                    <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="left" class="esd-block-text es-m-txt-c es-p20t">
                                                    <p style="color: #a0937d;">SHIPPING ADDRESS</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                    <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" class="esd-block-text">
                                                    ${items
                                                      .map(
                                                        (
                                                          item: ProductProps
                                                        ) => {
                                                          return `<p><span>${item.title}</span></p>`;
                                                        }
                                                      )
                                                      .join("")}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td class="esd-structure es-p20" align="left">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td width="560" class="esd-container-frame" align="center" valign="top">
                                    <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="center" class="esd-block-button"><span class="es-button-border"><a href="https://viewstripo.email" class="es-button" target="_blank">Track Your Order</a></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</td>`;
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: req.body.email, // Your email where you'll receive emails
      from: "nguyentanphucuit@gmail.com", // your website email address here
      subject: `${req.body.subject}`,
      html: emailTemplate,
    });
  } catch (error: any) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
