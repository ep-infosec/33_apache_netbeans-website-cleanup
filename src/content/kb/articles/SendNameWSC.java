/*
 * SendNameWSC.java
 *
 * Created on December 9, 2004, 3:42 PM
 */

package org.me.hello;

import java.net.URL;
import org.apache.axis.client.Call;
import org.apache.axis.client.Service;

/**
 *
 * @author  geertjan
 */
public class SendNameWSC extends javax.swing.JFrame {
    
    /** Creates new form SendNameWSC */
    public SendNameWSC() {
        initComponents();
    }
    
    /** This method is called from within the constructor to
     * initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is
     * always regenerated by the Form Editor.
     */
    private void initComponents() {                          
        labePanel = new javax.swing.JPanel();
        label = new javax.swing.JLabel();
        inputPanel = new javax.swing.JPanel();
        inputField = new javax.swing.JTextField();
        inputButton = new javax.swing.JButton();
        outputPanel = new javax.swing.JPanel();
        outputText = new javax.swing.JTextArea();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        label.setText("Enter your name");
        labePanel.add(label);

        getContentPane().add(labePanel, java.awt.BorderLayout.NORTH);

        inputField.setPreferredSize(new java.awt.Dimension(100, 20));
        inputField.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                inputFieldActionPerformed(evt);
            }
        });

        inputPanel.add(inputField);

        inputButton.setText("Send");
        inputButton.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                inputButtonActionPerformed(evt);
            }
        });

        inputPanel.add(inputButton);

        getContentPane().add(inputPanel, java.awt.BorderLayout.CENTER);

        outputText.setPreferredSize(new java.awt.Dimension(360, 180));
        outputPanel.add(outputText);

        getContentPane().add(outputPanel, java.awt.BorderLayout.SOUTH);

        pack();
        java.awt.Dimension screenSize = java.awt.Toolkit.getDefaultToolkit().getScreenSize();
        java.awt.Dimension dialogSize = getSize();
        setLocation((screenSize.width-dialogSize.width)/2,(screenSize.height-dialogSize.height)/2);
    }                        

    private void inputButtonActionPerformed(java.awt.event.ActionEvent evt) {                                            
        outputText.setText(getOutputString(inputField.getText()));
    }                                           
    
    private void inputFieldActionPerformed(java.awt.event.ActionEvent evt) {                                           
        // TODO add your handling code here:
    }                                          
    
    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new SendNameWSC().setVisible(true);
            }
        });
    }
    
    // Variables declaration - do not modify                     
    private javax.swing.JButton inputButton;
    private javax.swing.JTextField inputField;
    private javax.swing.JPanel inputPanel;
    private javax.swing.JPanel labePanel;
    private javax.swing.JLabel label;
    private javax.swing.JPanel outputPanel;
    private javax.swing.JTextArea outputText;
    // End of variables declaration                   
    public String getOutputString(String inputString){
        String outputString="";
        try{
            String endpoint="http://localhost:8084/AxisWS/HelloWS.jws";
            Service service=new Service();
            Call call=(Call)service.createCall();
            call.setTargetEndpointAddress(new URL(endpoint));
            outputString=(String)call.invoke("getString", new Object[]{inputString});
        } catch(Exception ex){
            outputString=ex.toString();
            ex.printStackTrace();
        }
        return outputString;
    }
}

